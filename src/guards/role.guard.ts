// TODO: INTEGRAR ROLE GUARD
async function ActiveRoleGuard(navigation) {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

export default ActiveRoleGuard;
