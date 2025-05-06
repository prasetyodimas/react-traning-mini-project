# Struktur Util di Level Terkecil

Utility di level terkecil adalah utility atau helper yang langsung berinteraksi domain bisnis atau spesifik module terkait


## Contoh
export const isNil = (value: unknown): value is null | undefined => value === null || value === undefined;
