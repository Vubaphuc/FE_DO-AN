export const getAddress = (provinces) => {
  if (!provinces) {
    return [];
  }
  return provinces.map((province) => {
    return {
      label: province.name,
      value: province.name,
    };
  });
};


export const getRoles = (roles) => {
  if(!roles) {
    return [];
  }
  return roles.map((role) => {
    return {
      label: role.name,
      value: role.id,
    };
  });
}

export const getNhanVienSuaChuas = (nhanviens) => {
  if (!nhanviens) {
    return [];
  }
  return nhanviens.map((nhanvien) => {
    return {
      label: nhanvien.fullName,
      value: nhanvien.maNhanVien,
    };
  });
}

export const getTypeOptions = () => {
  return [
      { label: "OK", value: "OK" },
      { label: "PENDING", value: "PENDING" },
  ];
}

export const getVender = (venders) => {
  if(!venders) {
    return [];
  }
  return venders.map((vender) => {
    return {
      label: vender.name,
      value: vender.id,
    };
  });
}

export const getLinhKien = (linhKiens) => {
  if(!linhKiens) {
    return [];
  }
  return linhKiens.map((linhKien) => {
    return {
      label: linhKien.name,
      value: linhKien.id,
    };
  });
}