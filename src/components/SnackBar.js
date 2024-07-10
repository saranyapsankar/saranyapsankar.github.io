import React from "react";

const SnackBar =({isActive, message})=> {
    
    return (
      <div className = {isActive ? ['snackbar', 'show'].join(" ") : 'snackbar'}>
        {message}
      </div>
    )
}

export default SnackBar;