function Loading(props) {
    const { language } = props;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-zinc-900 gap-3">
            <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 tracking-wide animate-pulse">
                {language === "en" ? "Loading..." : "Yükleniyor..."}
            </p>
        </div>);
}
export default Loading;