import React, { useEffect, useMemo, useState, useCallback } from 'react';

import {CircularProgress} from '@mui/material';
import ReactJson from 'react-json-view';
import Axios  from 'axios';
import toast from 'react-hot-toast';

const ServiceLoader = () => {

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({});

  const fetchData = useCallback(
    async () => {
      try {
        const result = await Axios.get("https://dev.api.zennya.com/api/4/services?latitude=14.566065988336462&longitude=120.98191450465623&device_type=WEB")
        setData(result.data);
      } catch (error) {
        toast.error(error?.message?.en || error?.response?.data?.message?.en || error?.response?.data?.details || error?.message)
      } finally {
        setLoading(false);
      }
    }, []
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <CircularProgress />
    );
  }
  return (
    <ReactJson
      src={{data}}
      collapsed={2}
    />
  )
}

export { ServiceLoader }