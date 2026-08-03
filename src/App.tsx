import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Context } from './sections/Context'
import { Problems } from './sections/Problems'
import { SearchSolutions } from './sections/SearchSolutions'
import { ChipsSolution } from './sections/ChipsSolution'
import { Prototypes } from './sections/Prototypes'
import { Research } from './sections/Research'
import { Insights } from './sections/Insights'
import { Outcome } from './sections/Outcome'
import { TableOfContents } from './components/TableOfContents'

export default function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <TableOfContents />
      <main className="w-full">
        <Hero />
        <Context />
        <Problems />
        <SearchSolutions />
        <ChipsSolution />
        <Prototypes />
        <Research />
        <Insights />
        <Outcome />
      </main>
    </div>
  )
}
