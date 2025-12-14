import { sweetService } from '../services/sweetService';

const SweetCard = ({ sweet, isAdmin, refresh }: any) => {
  const handlePurchase = async () => {
    await sweetService.purchase(sweet._id);
    refresh();
  };

  const handleDelete = async () => {
    await sweetService.delete(sweet._id);
    refresh();
  };

  const handleUpdate = async () => {
    const price = prompt('Enter new price', sweet.price);
    const quantity = prompt('Enter new quantity', sweet.quantity);

    if (price === null || quantity === null) return;

    await sweetService.update(sweet._id, {
      price: Number(price),
      quantity: Number(quantity)
    });

    refresh();
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100 sweet-card">
        <div className="card-body">
          <div className="row align-items-center">

            {/* 📝 LEFT CONTENT */}
            <div className="col-7">
              <h5>{sweet.name}</h5>
              <p className="mb-1">{sweet.category}</p>
              <p className="mb-1">₹{sweet.price}</p>
              <p className="mb-2">Stock: {sweet.quantity}</p>

              {!isAdmin && (
                <button
                  className="btn btn-success btn-sm"
                  onClick={handlePurchase}
                  disabled={sweet.quantity === 0}
                >
                  Purchase
                </button>
              )}

              {isAdmin && (
                <>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>

            {/* 🖼️ RIGHT IMAGE */}
            <div className="col-5 text-end">
              {sweet.image ? (
                <img
  src={sweet.image}
  alt={sweet.name}
  className="img-fluid rounded"
  style={{
    height: 120,
    width: '100%',
    objectFit: 'cover'
  }}
/>

              ) : (
                <div
                  className="bg-light rounded d-flex align-items-center justify-content-center"
                  style={{ height: 120 }}
                >
                  <small>No Image</small>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetCard;
