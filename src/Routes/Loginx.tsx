import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IonCard, IonCardHeader, IonItem, IonCardSubtitle, IonInput, IonCardTitle, IonCardContent, IonLabel } from '@ionic/react'

const Loginx = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [text, setText] = useState<string>();
  const shoot = (event: any) => {
    console.log('shoot')
    event.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/app/dashboard')
    }, 5000)
  }

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Login</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>

          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

        </IonCardContent>
      </IonCard>
    </>
  )
}

export default Loginx