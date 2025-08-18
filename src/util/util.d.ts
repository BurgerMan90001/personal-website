declare module 'util' {
    interface Files {
        tryGetSync(filePath: string): string;
    }
}