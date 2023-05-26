export type SetThemeFn = (theme: string) => void;


export interface ThemeProps{
    setTheme:SetThemeFn;
    isDarkMode:boolean;
}