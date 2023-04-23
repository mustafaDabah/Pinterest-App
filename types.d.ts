interface Pin {
  image: string;
  title: string;
  id: string;
}

interface DarkModeContextTypes {
  isDarkMode: boolean;
  toggleMode: () => Promise<void>;
  darkStyles: {
    headerBackground: any;
    headerTitle: any;
    container: any;
    text: any;
  };
}
