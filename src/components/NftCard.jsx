export default function NftCard({
  image,
  name,
  creatorName,
  creatorAvatar,
  date,
}) {
  return (
    <div className="nft-card-div">
      <h5>{name}</h5>
      <div className="img-div">
        <img className="nft-img" alt={`nft for ${name}`} src={`${image}`}></img>
      </div>
      <div className="creator-div">
        <h6>Created By:</h6>
        <div className="avatar-div">
          <img
            className="avatar-img"
            src={creatorAvatar}
            alt={`creator avatar for ${creatorName}`}
          ></img>
          <h6>
            {creatorName} {date}
          </h6>
        </div>
      </div>
    </div>
  )
}
