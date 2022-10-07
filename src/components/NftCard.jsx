export default function NftCard({ image, name, creatorName, creatorAvatar }) {
  return (
    <div className="nft-card-div">
      <div className="img-div">
        <img alt={`nft for ${name}`} src={`${image}`}></img>
      </div>
      <p>{name}</p>
    </div>
  )
}
