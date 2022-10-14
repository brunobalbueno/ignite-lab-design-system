import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { Logo } from "./components/Logo";
import "./styles/global.css";
import { TextInput } from "./components/Input/Input";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Button } from "./components/Button/Button";
import { SignIn } from "./pages/SignIn";

export function App() {
    return <SignIn />;
}
