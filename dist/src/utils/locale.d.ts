declare const localeCache: {
    localeDefault: string;
    setLocale(locale?: string): void;
    readonly locale: string;
};
export default localeCache;
