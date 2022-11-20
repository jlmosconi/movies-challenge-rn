async function ActiveRoleGuard(navigation) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   console.log('Checking for an active shop');
    //   console.log(navigation);
    //   // navigation.navigate("/accounts/login");
    //   resolve(true); // return false if there is no active shop
    // }, 3000);
    resolve(true);
  });
}

export default ActiveRoleGuard;
