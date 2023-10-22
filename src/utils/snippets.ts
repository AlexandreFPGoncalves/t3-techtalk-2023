const reactCounterSnippet = `function App() {
const [counter, setCounter] = useState(0);
  return (
    <>
	  <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
    </>
  );
}`;

const createT3App = `npm create t3-app@latest`;

const nextLinkComponent = `<Link href="/" className="flex w-full items-center gap-6 p-2 md:w-auto">
  <Image src={images.itsector} width={32} height={32} alt="itsector_logo" />
  <span className="text-2xl font-bold text-white">{resources.title}</span>
</Link>`;

const createNextApplication = `// Criação de um novo projeto
npx create-next-app my-nextjs-app

// Navegar para o diretório
cd my-nextjs-app

// Start Development server
npm run dev`;

const nextHomeScreen = `// pages/index.js
import Link from 'next/link'

function Home(){
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}`;

const typescriptErrors = `//Javascript 👎
randomObj.random() 

IDE -> ✅
RUN -> ⛔️ Uncaught ReferenceError: randomObj is not defined at X:2:1

//Typescript 👍
randomObj.random() 

IDE -> ⛔️ Cannot find name "randomObj". ts(2304)
RUN -> ⛔️ Cannot find name "randomObj". ts(2304)`;

const typescriptStaticTypes = `//Explicit Type
let name: string;

//Implicit Type
let surname = "Gonçalves"`;

const typescriptExample = `import {ComponentProps} from "react"

type ButtonProps = {
    name:string // example
} & ComponentProps<'button'>

export const ButtonWithProps = ({name, children, ...props}:ButtonProps) => {
    return <button data-name={name} {...props}>{children ?? "Button with props"}</button>
}

export const ButtonWithoutProps = () => {
    return <button>Button without props</button>
}`;

const tailwindcssClasses = `<h2 className="bg-gradient-to-r from-white to-lightgrey bg-clip-text text-4xl font-bold text-transparent">
Classes Utilitárias
</h2>`;

const tailwindcssResponsiveness = `<div className="flex items-center gap-10 until-md:flex-col">{...children}</div>`;

const tailwindcssConfig = `import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4165FF",
        purple: "#7241FF",
        darkblue: "#182542",
      },},},

  plugins: [
    // eslint-disable-next-line
    require("tailwindcss-accent")({
      colors: ["violet", "blue", "orange"],
      root: "violet",
    }),],} 
    satisfies Config;`;

const nextauthInstallation = `npm i next-auth
# or
yarn add next-auth`;

const nextauthConfiguration = `import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Additional authentication providers if needed
  ],
  // Other Configuration options
})`;

const nextauthCustomProvider = `import { CustomProvider } from "next-auth/providers"

const options = {
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type : "password" }
  },
  async authorize(credentials) {
    // Add your authentication logic here
    const user = { id: 1, name: "Humberto" }
    user ? Promise.resolve(user) : Promise.resolve(null)
  }
}

export default CustomProvider(options)`;

const nextauthGetSession = `import { getSession } from "next-auth/react"

export default async (req, res) => {
  const session = await getSession({ req })

  if(session){
    // User is authenticated
  } else {
    // User is not authenticated
  }
}`;

const nextauthUserData = `import { getSession } from "next-auth/react"

function MyPage() {
  const { data: session } = useSession()

  return (
    <div>
    {session ? (
      <p>Welcome, {session.user.name}</p>
    ): (
      <p>You are not logged in</p>
    )}
    </div>
  )
}
`;

export const snippets = {
  reactCounterSnippet,
  createT3App,
  nextLinkComponent,
  createNextApplication,
  nextHomeScreen,
  typescriptErrors,
  typescriptStaticTypes,
  typescriptExample,
  tailwindcssClasses,
  tailwindcssResponsiveness,
  tailwindcssConfig,
  nextauthInstallation,
  nextauthConfiguration,
  nextauthCustomProvider,
  nextauthGetSession,
  nextauthUserData,
};
