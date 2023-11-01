import Alert from './sections/Alert'
import Welcome from './sections/Welcome'
import Tasks from './sections/Tasks'
import Events from './sections/Events'
import Accordion from './sections/Accordion'

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Alert />
      <main className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <Welcome />
          <div className="grid md:grid-cols-2 gap-8">
            <Tasks />
            <Events />
          </div>
          <Accordion />
      </main>
    </div>
  )
}
