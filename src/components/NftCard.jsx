export default function NftCard({ image, name, creatorName, creatorAvatar }) {
  return (
    <div className="nft-card-div">
      <div className="img-div">
        <img src={`${image}`}></img>
      </div>
      <p>{name}</p>
    </div>
  )
}
