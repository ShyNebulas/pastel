import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Item from '../components/Item'

import JSON from '../../data/info.json'

export default function Accordion() {
    return (
        <section className="mt-8">
            {JSON.map((info, key) => (
                <Item 
                    title={info.title}
                    body = {
                        <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                            {info.content}
                        </Markdown>
                    } 
                    top={key == 0 ? true : false} 
                    key={key}
                />
            ))}
        </section>
    )
} 