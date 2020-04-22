import React from "react";
import ThemeProvider from "../src/components/theme";
import ThemeContext from "./components/theme/ThemeContext";
import SearchBar from "./components/landingPage/searchBar";
import Main from "./components/main";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  const [theme, setTheme] = React.useState("material");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider>
        <BrowserRouter>
          <Route path="/" component={SearchBar} exact={true} />
          <Route path="/page" component={Main} exact={true} />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
