export default function Main() {
  return (
    <div className="p-10 lg:px-12 col-span-12">

      {/* INTRODUCTION */}
      <div className="lg:pt-10">
      <h3 className="text-left text-xl font-semiboldp">About</h3>
        <h5 className="block text-white mt-5 text-lg text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit
          minima ex beatae inventore exercitationem iure, nostrum est voluptatum
          repellat enim consequatur vel magni consequuntur quam corrupti
          temporibus! Voluptas, deleniti?
        </h5>
      </div>

      {/* TECH */}
      <div>
        <div className="lg:pt-5">
          <h3 className="my-5 text-left text-xl font-medium">Technologies</h3>
          <div>
            <div className ="my-5 grid lg:grid-cols-3 gap-5">
              {/* FRONT END */}
              <div className ="bg-stone-200 rounded-md">
                <h4 className="mt-2 font-medium">Front End</h4>
                <ul className="my-2 grid-cols-2" >
                  <li>JavaScript ES6</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>TypeScript</li>
                  <li>Scss</li>
                  <li>MUI</li>
                  <li>Styled Components</li>
                  <li>tailwindcss</li>
                  <li>Redux Toolkit</li>
                  <li>React Query</li>
                </ul>
              </div>
                            {/* BACK END */}
                            <div className ="bg-stone-200 rounded-md">
                <h4 className="mt-2 font-medium">Back End</h4>
                <ul className="my-2 grid-cols-2" >
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>GraphQL</li>
                  <li>Mongodb</li>
                  <li>Firebase v.9</li>
                  <li>PostgreSQL</li>
                  <li>mySQL</li>
                  <li>Jest</li>
                </ul>
              </div>

                            {/* OTHERS */}
                            <div className ="bg-stone-200 rounded-md">
                <h4 className="mt-2 font-medium">Others</h4>
                <ul className="my-2 grid-cols-2" >
                  <li>Git & Github</li>
                  <li>Figma</li>
                  <li>Python</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
