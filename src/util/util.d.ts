declare module 'util' {
    interface loggerOptions {
        test():void;
    }
    interface Files {
        tryGetSync(filePath: string): string;
    }
}