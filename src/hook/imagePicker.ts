import { useState } from 'react';
import { ImageLibraryOptions, launchImageLibrary, Asset } from 'react-native-image-picker';

const photoLibraryOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  selectionLimit: 1,
};

export const useImagePicker = () => {
  const [selectedImageFile, setSelectedImageFile] = useState<Asset>({});

  const showPhotoGalleryPicker = () => {
    launchImageLibrary(photoLibraryOptions, (response) => {
      if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        setSelectedImageFile(asset);
      }
    });
  };

  return { selectedImageFile, showPhotoGalleryPicker, setSelectedImageFile };
};
