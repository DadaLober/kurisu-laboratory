import { useEffect, useState } from 'react';

const logs = [
    '> Booting up the Laboratory...',
    '> Loading system modules...',
    '> Kurisu.exe initialized [OK]',
    '> Establishing connection to Steins;Gate...',
    '> El Psy Kongroo.',
];

export default function TerminalLog({ onComplete }: { onComplete: () => void }) {
    const [currentLine, setCurrentLine] = useState('');
    const [allLines, setAllLines] = useState<string[]>([]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < logs.length) {
            const line = logs[lineIndex];
            if (charIndex < line.length) {
                const timeout = setTimeout(() => {
                    setCurrentLine((prev) => prev + line[charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, 15);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setAllLines((prev) => [...prev, line]);
                    setCurrentLine('');
                    setCharIndex(0);
                    setLineIndex((prev) => prev + 1);
                }, 200);
                return () => clearTimeout(timeout);
            }
        } else {
            const timeout = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, lineIndex]);

    return (
        <div className="bg-black/50 border-2 border-[#00ffea] text-green-400 p-4 rounded font-mono text-sm shadow-inner max-h-64 overflow-y-auto">
            {allLines.map((log, idx) => (
                <div key={idx} className="whitespace-pre">{log}</div>
            ))}
            {lineIndex < logs.length && (
                <div className="whitespace-pre blink-cursor">{currentLine}</div>
            )}
        </div>
    );
}
