export const applyGuards = async (guards: Promise[], navigation): Promise<boolean> => {
  if (guards && Array.isArray(guards) && guards.length > 0) {
    try {
      const results = [];
      for (const guard of guards) {
        results.push(await guard(navigation));
      }
      return results.reduce((a, b) => a && b, true);
    } catch (e) {
      return false;
    }
  } else {
    return true;
  }
};
