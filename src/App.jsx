import { HeaderBlog } from "./components/Layouts/Header/Header"
import { Section } from "./components/Layouts/Section/Section"
import { Main } from "./components/Main/Main"
import {News} from "./components/News/News.jsx"
import { OtherNews } from "./components/OtherNews/OtherNews.jsx"
import { Home } from "./components/pages/Home/Home"



function App() {
  return (
    
    <Home>
    <HeaderBlog/>
    <Main>
    <Section>
    <News>
      <p className="text-gray-100">holaaa</p>
    </News>
      <OtherNews>
        <p className="text-gray-100">hola</p>
      </OtherNews>
    </Section>
    </Main>
    </Home>
      
    
  )
}

export default App
