import { Page, Code, Section, Stage, Scene, Narrative, UXComment } from '../components.jsx'

export default function NavbarPage (props) {
  return (
    <Page>

     <h1>Navbar</h1>
        <p>
          TODO, Compare with <a href="https://getbootstrap.com/docs/4.0/components/navbar/">Bootstrap</a>.
        </p>
        <p>Läs först <a href="/style/guidelines/menu">riktlinjer meny</a> där du får hjälp att välja rätt typ av komponent.</p>
  
        <Section title="Menu Link nav">
        </Section>  
          <Stage>
              <UXComment>
                <h4>Användning</h4>
                <ul>
                  <li>
                    Lista menyalternativ i form av länkar under en meny-knapp
                  </li>
                </ul>
              </UXComment>
            </Stage>
    </Page>
  )
}
