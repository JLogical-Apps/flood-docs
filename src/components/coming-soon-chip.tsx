import React from 'react';
import clsx from 'clsx';

export default function ComingSoonChip({ title = false }: { title?: boolean }) {
    return (
        <div
            className={clsx(
                'inline text-[10px] text-white font-bold ml-2 px-1 py-0.5 rounded-2xl bg-zinc-700 m-auto text-center',
                title ? 'absolute translate-y-[80%] text-[12px]' : ''
            )}
        >
            Coming Soon
        </div>
    );
}
