
import Hero from "../hero/Hero";
import Info from "../Info/Info";
import CallToAction from "../CallToAction/CallToAction";

const Details =({appName, title, color,preview, hero, description, android,ios, ctitle, cdescription, array})=>{
    return (
        <main>
        <Hero appName={appName} title={title} color={color} preview={preview} hero={hero} android={android} ios={ios}/>
        <Info description={description} arr={array} />
        <CallToAction color={color} hero={hero} android={android} ios={ios} ctitle={ctitle} cdescription={cdescription} />
        </main>
    );
}
export default Details;