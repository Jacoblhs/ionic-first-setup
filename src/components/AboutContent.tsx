import {
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonText } from '@ionic/react';

const AboutContent = () =>{

    return(
    <>
    <IonGrid>
<IonRow>
    <IonCol>
        <IonText class="ion-text-center" color="primary">
         <h4>This is me</h4>
        </IonText>
    </IonCol>
</IonRow>

<IonRow>
<IonCol size="8">This is me at the age at 8, just become red, and still fighting for the humanity</IonCol>
<IonCol size="4">
<IonImg src="assets/images/ninja.png"></IonImg>
</IonCol>
</IonRow>

    </IonGrid>
      </>

    );
}

export default AboutContent;