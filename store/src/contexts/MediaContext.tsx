import { useMedia } from '@/hooks/apiHooks';
import { MediaContextType, MediaItem } from '@sharedTypes/DBTypes';
import { createContext, useEffect, useState } from 'react';

const MediaContext = createContext<MediaContextType | null>(null);

const MediaProvider = ({ children }: { children: React.ReactNode }) => {
  const [mediaItems, setMediaItems] = useState<MediaItem[] | null>(null);
  const [singleMediaItem, setSingleMediaItem] = useState<MediaItem | null>(
    null,
  );
  const [singleMediaItemId, setSingleMediaItemId] = useState<string | null>(
    null,
  );
  const [refreshMediaItems, setRefreshMediaItems] = useState<boolean>(false);
  const [refreshSingleMediaItem, setRefreshSingleMediaItem] =
    useState<boolean>(false);
  const { getMedia, getSingleMedia } = useMedia(
    refreshMediaItems,
    refreshSingleMediaItem,
  );

  const refreshMedia = () => {
    setRefreshMediaItems(!refreshMediaItems);
  };

  const refreshSingleMedia = () => {
    setRefreshSingleMediaItem(!refreshSingleMediaItem);
  };

  useEffect(() => {
    const updateMediaItems = async () => {
      const media = await getMedia();
      if (!media) {
        return;
      }
      setMediaItems(media);
    };
    updateMediaItems();
  }, [getMedia, refreshMediaItems]);

  useEffect(() => {
    const updateSingleMediaItem = async (id: string) => {
      const media = await getSingleMedia(id);
      if (!media) {
        return;
      }

      console.log('updateSingleMediaItem', media);
      setSingleMediaItem(media);
    };

    if (!singleMediaItemId) {
      return;
    }

    updateSingleMediaItem(singleMediaItemId);
  }, [refreshSingleMediaItem, singleMediaItemId, getSingleMedia]);

  console.log(mediaItems, refreshMediaItems);

  return (
    <MediaContext.Provider
      value={{
        mediaItems,
        refreshMedia,
        refreshSingleMedia,
        singleMediaItem,
        setSingleMediaItemId,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export { MediaContext, MediaProvider };
