import Accordion from "./components/accordion/Accordion";
import { Dropdown } from "./components/dropdown/Dropdown";
import { DropdownItem } from "./components/dropdown/DropdownItem";
import { DropdownMenu } from "./components/dropdown/DropdownMenu";
import { DropdownToggle } from "./components/dropdown/DropdownToggle";

function App() {
  return (
    <main>
      <section>
        <h1>React Compound Pattern</h1>
        <Accordion className="accordion" initialOpenItemId="first">
          <Accordion.Item id="first" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              First title
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You're the first content here.</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis voluptates quo atque placeat.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="second" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We're Second title
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>second content</p>
                <p>
                  eius, eum, quam voluptatibus incidunt dolores veniam modi. sit
                  amet consectetur
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
        {/* Dropdown */}
        <br />
        <Dropdown>
          <Dropdown.Toggle>Toggle Dropdown</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => alert("Item 1 clicked")}>
              Item 1
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Item 2 clicked")}>
              Item 2
            </Dropdown.Item>
            {/* More DropdownItems as needed */}
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </main>
  );
}

export default App;
