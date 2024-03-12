import StarIcon from '../../../assets/icons/staricon2.png'

function Rating(){

    return(
        <div className='inline-flex justify-center gap-2 w-full mt-5'>
                <img src={StarIcon} alt="Star Icon" className='w-6'/>
                <img src={StarIcon} alt="Star Icon" className='w-6'/>
                <img src={StarIcon} alt="Star Icon" className='w-6'/>
                <img src={StarIcon} alt="Star Icon" className='w-6'/>
                <img src={StarIcon} alt="Star Icon" className='w-6'/>
            </div>
    )

}

export default Rating