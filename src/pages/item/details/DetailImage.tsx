import detailImageStyle from '../../../css/DetailImage.module.css'

interface DetailImageProp {
    image?: undefined | string
}

const DetailImage: React.FC<DetailImageProp> = ({image}) => {
    return (
        <>
            <div className={detailImageStyle['detail-image-wrapper']} style={{backgroundImage: `url(${image})`}}></div>
        </>
    )
}

export default DetailImage;
