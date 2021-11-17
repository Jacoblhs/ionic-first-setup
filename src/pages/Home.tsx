import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonFooter
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ninja</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonList>
          <IonItem routerLink="/about">About</IonItem>
          <IonItem routerLink="/contact">Contact</IonItem>

        </IonList>

      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Call for help</IonTitle>
        </IonToolbar>

      </IonFooter>

    </IonPage>
  );
};

export default Home;
