import React, {useEffect, useState} from "react";
import '../index.css';
import NavBar from "../NavBar";
import Download from "./Download";
import Features from "./Features";
import Footer from "./Footer";
import LastPage from "./LastPage";
import Leaving from "./Leaving";
import Whoweare from "./Whoweare";
import Loading from "./Loading";
import ReactSelect from './ReactSelect';
import Slider from './SliderFolder/Slider';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <Loading/>
      </section>
    );
  }
  return (
    <div className="Home-Page-First" meetups={loadedMeetups} >
      <NavBar/>
     <Footer/>
     <ReactSelect/>
      <Leaving/>
      <Whoweare/>
      <Features/>
      <Slider/>
      <Download/>
      <LastPage/>
    </div>
  )
}

export default App;
