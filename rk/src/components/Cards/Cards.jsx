import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({characters}) {
   const onClose = () => alert('Emulamos que se cierra la card SANMAN');
   return (
   <div className={style.container}>
      {
         characters.map(({id, name, species, gender, status, image, origin,}) => {
            return(
            <Card
            key = {id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            status={status}
            origin={origin.name}
            image={image}
            onClose = {onClose}
            
            />
            )
         })
      }
   </div>
   );

}
