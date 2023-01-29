// import React from 'react';
// import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

// import { Header } from '../components';
// import { EditorData } from '../data/dummy';

// const PersonalProfile = () => (
//   <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//     <Header category="App" title="Editor" />
//     <RichTextEditorComponent>
//       <EditorData />
//       <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
//     </RichTextEditorComponent>
//   </div>
// );
// export default PersonalProfile;
import React from "react";
import CardForm from "../components/CardForm";
import CardInfo from "../components/CardInfo";
import "../css/main.css";

const App = () => {
  return (
    <main className="container">
      <h1 className="sr-only">
        Frontend Mentor | Intro component with sign up form
      </h1>
      <div className="card">
        <CardInfo />
        <CardForm />
      </div>
    </main>
  );
};

export default App;
