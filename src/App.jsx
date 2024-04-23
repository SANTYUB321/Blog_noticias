import { GalleryImages } from "./components/GalleryImages/GalleryImages.jsx"
import { JsonNews } from "./components/JsonNews/JsonNews.jsx"
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
    <News/>
      <OtherNews>
        <JsonNews/>
      </OtherNews>
    </Section>
   <GalleryImages/>
    </Main>
    </Home>
      
    
  )
}

export default App
