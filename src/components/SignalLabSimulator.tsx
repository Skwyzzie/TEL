import React, { useState, useEffect, useRef } from 'react';
import { Activity, ShieldCheck, Zap, AlertTriangle, RefreshCw, Crosshair, Sparkles } from 'lucide-react';

type SignalMode = 'drone-acoustic' | 'radar-pulse' | 'subterranean' | 'swarm-spread';
type JammerMode = 'none' | 'spot-jam' | 'barrage';

export const SignalLabSimulator: React.FC = () => {
  const [signalMode, setSignalMode] = useState<SignalMode>('drone-acoustic');
  const [jammerMode, setJammerMode] = useState<JammerMode>('barrage');
  const [cognitiveFilterActive, setCognitiveFilterActive] = useState<boolean>(true);
  const [frequencyVal, setFrequencyVal] = useState<number>(433); // MHz
  const [pulseWidth, setPulseWidth] = useState<number>(25); // microseconds

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // Derived telemetry metrics
  const isJammed = jammerMode !== 'none' && !cognitiveFilterActive;
  const currentSnr = isJammed 
    ? (jammerMode === 'barrage' ? -8.4 : -2.1)
    : (cognitiveFilterActive && jammerMode !== 'none' ? 19.8 : 26.5);
  const lockStatus = isJammed ? 'LOCK LOST' : 'SOLID BEARING LOCK';
  const bearingAz = isJammed ? 'DRIFTING ---.-°' : 'AZ 148.6°';
  const bearingEl = isJammed ? 'EL --.-°' : 'EL +11.4°';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 240);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 240;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      timeRef.current += 0.04;
      const t = timeRef.current;

      // Dark oscilloscope canvas clear
      ctx.fillStyle = '#06080e';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;

      // Horizontal grid
      for (let y = 30; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      // Vertical grid
      for (let x = 40; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw Center Baseline
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Synthesize Waveform
      ctx.lineWidth = 2;
      ctx.beginPath();

      const midY = height / 2;
      const points = width;

      for (let x = 0; x < points; x += 2) {
        const normX = x / width;
        let y = midY;

        // Base target signal
        if (signalMode === 'drone-acoustic') {
          // Acoustic rotor Doppler harmonics (fundamental + 3rd + 5th harmonics)
          const fundamental = Math.sin(normX * 30 + t * 4) * 35;
          const harmonic = Math.sin(normX * 90 + t * 12) * 12;
          const envelope = Math.exp(-Math.pow((normX - 0.5) * 3, 2));
          y += (fundamental + harmonic) * envelope;
        } else if (signalMode === 'radar-pulse') {
          // Chirped radar pulse echo
          const chirpFreq = 10 + normX * 40;
          const pulseEnvelope = Math.sin(normX * Math.PI) > 0.3 ? 1 : 0.05;
          y += Math.sin(normX * chirpFreq * 10 - t * 8) * 45 * pulseEnvelope;
        } else if (signalMode === 'subterranean') {
          // Low frequency seismic guided wave
          y += Math.sin(normX * 8 - t * 2) * 40 + Math.sin(normX * 16 - t * 3) * 15;
        } else {
          // Swarm spread spectrum frequency hops
          const hop = Math.sin(normX * 60 + Math.floor(t * 2)) * 30;
          y += hop;
        }

        // Hostile Electronic Jamming Injection
        if (jammerMode === 'spot-jam') {
          const jammerNoise = (Math.random() - 0.5) * 50 * Math.sin(normX * 120 + t * 10);
          if (cognitiveFilterActive) {
            // Filter notches out 94% of jammer
            y += jammerNoise * 0.06;
          } else {
            y += jammerNoise;
          }
        } else if (jammerMode === 'barrage') {
          const barrageNoise = (Math.random() - 0.5) * 75;
          if (cognitiveFilterActive) {
            // Adaptive Wiener + Neural Null-Steering reduces noise floor drastically
            y += barrageNoise * 0.08;
          } else {
            y += barrageNoise;
          }
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Stroke color based on status
      if (isJammed) {
        ctx.strokeStyle = '#f43f5e'; // Harsh pink-red under severe jamming
        ctx.shadowColor = '#f43f5e';
        ctx.shadowBlur = 6;
      } else if (cognitiveFilterActive && jammerMode !== 'none') {
        ctx.strokeStyle = '#06b6d4'; // Laser cyan under active Third Echo filter
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 8;
      } else {
        ctx.strokeStyle = '#10b981'; // Pristine emerald
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 4;
      }

      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Target lock overlay reticle if locked
      if (!isJammed) {
        const targetX = width * 0.5 + Math.sin(t * 1.5) * 40;
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(targetX, midY, 16, 0, Math.PI * 2);
        ctx.stroke();
        // Crosshair ticks
        ctx.beginPath();
        ctx.moveTo(targetX - 22, midY);
        ctx.lineTo(targetX + 22, midY);
        ctx.moveTo(targetX, midY - 22);
        ctx.lineTo(targetX, midY + 22);
        ctx.stroke();

        ctx.fillStyle = '#22d3ee';
        ctx.font = '10px monospace';
        ctx.fillText('ECHO-LOCK', targetX + 20, midY - 10);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [signalMode, jammerMode, cognitiveFilterActive, frequencyVal, pulseWidth, isJammed]);

  return (
    <section id="signallab" className="py-20 border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-850">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" />
              <span>03. Live Interactive Telemetry Stage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Third Echo Signal Synthesis &amp; De-Ghosting.
            </h2>
            <p className="text-neutral-400 mt-2 max-w-2xl text-sm sm:text-base">
              Simulate high-threat Electronic Warfare (EW) jamming environments and witness Third Echo&apos;s real-time cognitive anti-jam filtering recover raw mission bearing telemetry.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>REAL-TIME CANVAS DSP ENGINE</span>
          </div>
        </div>

        {/* Main Simulator Console */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Console: Parameter Controls (4 Cols) */}
          <div className="lg:col-span-4 rounded-lg border border-neutral-800 bg-neutral-900/60 p-5 space-y-6">
            
            {/* Signal Profile Selection */}
            <div>
              <label className="text-xs font-mono text-neutral-400 block mb-2 uppercase tracking-wider">
                1. Sensor Signal Mode
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setSignalMode('drone-acoustic')}
                  className={`p-2 rounded text-left border transition-colors cursor-pointer ${
                    signalMode === 'drone-acoustic'
                      ? 'bg-cyan-950/70 border-cyan-500 text-cyan-300 font-semibold'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <div>Drone Acoustic</div>
                  <div className="text-[10px] text-neutral-400 font-normal">Propeller Micro-Doppler</div>
                </button>

                <button
                  onClick={() => setSignalMode('radar-pulse')}
                  className={`p-2 rounded text-left border transition-colors cursor-pointer ${
                    signalMode === 'radar-pulse'
                      ? 'bg-cyan-950/70 border-cyan-500 text-cyan-300 font-semibold'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <div>Radar Chirp Pulse</div>
                  <div className="text-[10px] text-neutral-400 font-normal">L/S-Band Return</div>
                </button>

                <button
                  onClick={() => setSignalMode('subterranean')}
                  className={`p-2 rounded text-left border transition-colors cursor-pointer ${
                    signalMode === 'subterranean'
                      ? 'bg-cyan-950/70 border-cyan-500 text-cyan-300 font-semibold'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <div>Seismic Guided</div>
                  <div className="text-[10px] text-neutral-400 font-normal">Sub-Surface Transceiver</div>
                </button>

                <button
                  onClick={() => setSignalMode('swarm-spread')}
                  className={`p-2 rounded text-left border transition-colors cursor-pointer ${
                    signalMode === 'swarm-spread'
                      ? 'bg-cyan-950/70 border-cyan-500 text-cyan-300 font-semibold'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <div>Swarm Mesh Hop</div>
                  <div className="text-[10px] text-neutral-400 font-normal">Synapse-Mesh FHSS</div>
                </button>
              </div>
            </div>

            {/* Hostile Jamming Threat Injector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>2. Hostile EW Jammer</span>
                </label>
                <span className={`text-[11px] font-mono font-semibold ${isJammed ? 'text-rose-400' : 'text-neutral-400'}`}>
                  {jammerMode.toUpperCase()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  onClick={() => setJammerMode('none')}
                  className={`py-2 px-2 text-center rounded border transition-colors cursor-pointer ${
                    jammerMode === 'none'
                      ? 'bg-neutral-800 border-neutral-600 text-white font-medium'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Off
                </button>
                <button
                  onClick={() => setJammerMode('spot-jam')}
                  className={`py-2 px-2 text-center rounded border transition-colors cursor-pointer ${
                    jammerMode === 'spot-jam'
                      ? 'bg-rose-950/60 border-rose-500 text-rose-300 font-medium'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Spot Tone
                </button>
                <button
                  onClick={() => setJammerMode('barrage')}
                  className={`py-2 px-2 text-center rounded border transition-colors cursor-pointer ${
                    jammerMode === 'barrage'
                      ? 'bg-rose-950/60 border-rose-500 text-rose-300 font-medium'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  Barrage Noise
                </button>
              </div>
            </div>

            {/* Third Echo Cognitive Filter Toggle */}
            <div className="p-3.5 rounded bg-neutral-950 border border-cyan-900/60 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Third Echo Cognitive DSP</span>
                </div>
                <button
                  onClick={() => setCognitiveFilterActive(!cognitiveFilterActive)}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    cognitiveFilterActive ? 'bg-cyan-500' : 'bg-neutral-700'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-neutral-950 shadow ring-0 transition duration-200 ease-in-out ${
                      cognitiveFilterActive ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal">
                {cognitiveFilterActive
                  ? 'Active: Real-time neural null-steering notches jammer energy while preserving phase coherence.'
                  : 'Bypassed: System exposes raw signal to unshielded hostile RF / acoustic interference.'}
              </p>
            </div>

            {/* Parameter Sliders */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1">
                  <span>TUNING FREQUENCY:</span>
                  <span className="text-white">{frequencyVal} MHz</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2400"
                  step="10"
                  value={frequencyVal}
                  onChange={(e) => setFrequencyVal(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-neutral-800 h-1 rounded appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1">
                  <span>PULSE DURATION:</span>
                  <span className="text-white">{pulseWidth} μs</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={pulseWidth}
                  onChange={(e) => setPulseWidth(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-neutral-800 h-1 rounded appearance-none cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Right Console: Canvas Display & Telemetry Readout (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden">
            
            {/* Top Telemetry Header */}
            <div className="px-5 py-3 bg-neutral-900 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-neutral-400">CHANNEL 01</span>
                <span aria-hidden="true" className="text-neutral-600">|</span>
                <span className="text-cyan-400">{frequencyVal}.000 MHz</span>
                <span aria-hidden="true" className="text-neutral-600">|</span>
                <span className="text-neutral-300">BW: 40 MHz</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isJammed ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'}`} />
                <span className={isJammed ? 'text-rose-400 font-semibold' : 'text-emerald-400 font-semibold'}>
                  {lockStatus}
                </span>
              </div>
            </div>

            {/* The Live Oscilloscope Canvas */}
            <div className="p-4 relative flex-1 min-h-[240px] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full rounded border border-neutral-850"
              />
              
              {/* Overlay HUD Readouts */}
              <div className="absolute top-6 left-6 font-mono text-xs text-neutral-400 space-y-1 pointer-events-none">
                <div>TIME/DIV: 2.5 μs</div>
                <div>VOLT/DIV: 50 mV</div>
                <div className={isJammed ? 'text-rose-400 font-bold' : 'text-cyan-300'}>
                  SNR: {currentSnr.toFixed(1)} dB
                </div>
              </div>

              <div className="absolute top-6 right-6 font-mono text-xs text-right text-neutral-400 space-y-1 pointer-events-none">
                <div className="text-white font-semibold flex items-center justify-end gap-1">
                  <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{bearingAz}</span>
                </div>
                <div>{bearingEl}</div>
                <div className="text-neutral-500">CONF: {isJammed ? '12%' : '99.4%'}</div>
              </div>
            </div>

            {/* Bottom Real-Time Telemetry Bar */}
            <div className="p-4 bg-neutral-900/60 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <div className="text-neutral-500">SIGNAL INTEGRITY</div>
                <div className={`text-sm font-bold ${isJammed ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {isJammed ? 'DEGRADED (4%)' : '99.82 %'}
                </div>
              </div>
              <div>
                <div className="text-neutral-500">PACKET JITTER</div>
                <div className="text-sm font-bold text-white tabular-nums">
                  {isJammed ? '1,420 ns' : '< 180 ns'}
                </div>
              </div>
              <div>
                <div className="text-neutral-500">ALGORITHM STAGE</div>
                <div className="text-sm font-bold text-cyan-400 truncate">
                  {cognitiveFilterActive ? 'ECHO-NULL-V4' : 'DIRECT-RAW'}
                </div>
              </div>
              <div>
                <div className="text-neutral-500">LATENCY TO ATAK</div>
                <div className="text-sm font-bold text-white tabular-nums">
                  {isJammed ? 'TIMEOUT' : '34.2 ms'}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
