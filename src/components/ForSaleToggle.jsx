export default function ForSaleToggle({ handleForSale, forSale }) {
  return (
    <div className="forsale-toggle">
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={`btn btn-secondary ${forSale ? '' : 'active'}`}>
          <input
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            value={false}
            checked={!forSale}
            onChange={handleForSale}
          />
          All
        </label>
        <label className={`btn btn-secondary ${forSale ? 'active' : ''}`}>
          <input
            type="radio"
            name="options"
            id="option2"
            autoComplete="off"
            value={true}
            onChange={handleForSale}
            checked={forSale}
          />
          For Sale
        </label>
      </div>
    </div>
  )
}
