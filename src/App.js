import './App.css';
import { NavBar, NewCarsCollection, AddCar } from './ui-components'
import { withAuthenticator, Divider } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { DataStore } from 'aws-amplify';
import { RentalCarModel } from './models';

function App({user, signOut}) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const saveRentalCar = async () => {
    try{
      await DataStore.save(
        new RentalCarModel({
          name: name,
          price: parseFloat(price),
          description: description,
          imageUrl: imageUrl
        })
      )
    }catch(error){
      console.log(error);
    }
  }
  const addCarOverride = {
    'TextField29766922':{
      onChange: (event) =>{
        setName(event.target.value);
      }
    },
    'TextField36582691':{
      onChange: (event) =>{
        setPrice(event.target.value);
      }
    },
    'TextField29766923':{
      onChange: (event) =>{
        setDescription(event.target.value);
      }
    },
    'TextField29766924':{
      onChange: (event) =>{
        setImageUrl(event.target.value);
      }
    },
    'Button':{
      onClick: saveRentalCar
    }
  }
  const navBarOverrides = {
    'carLogo':{
      src:'https://img.icons8.com/color/50/000000/car--v1.png'
    },
    'avatarImage':{
      src:user?.attributes?.profile
    },
    'Button':{
      onClick: signOut
    }
  }
  return (
    <div className="App">
      <NavBar width='100%' overrides={navBarOverrides}/>
      <header className="App-header">
        <AddCar overrides={addCarOverride} style={{textAlign: 'left', margin: '1rem'}} />
        <Divider />
        <NewCarsCollection/>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
