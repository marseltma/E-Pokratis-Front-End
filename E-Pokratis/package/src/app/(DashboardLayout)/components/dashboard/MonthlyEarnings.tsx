import dynamic from "next/dynamic";
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Importing the new chart component
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DoctorsVisitors = () => {
  // Theme and colors
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const errorlight = '#fdede8';

  // Chart options for radial chart
  const optionsRadialChart = {
    chart: {
      type: 'radialBar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '60%',
        },
        dataLabels: {
          show: false,
        }
      },
    },
    labels: ['Visitors'],
    colors: [secondary],
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };

  // Data for radial chart
  const seriesRadialChart = [70]; // Adjust the value as per your data

  return (
    <DashboardCard
      title="Doctors Visitors"
      action={
        <Fab color="secondary" size="medium" sx={{ color: '#ffffff' }}>
          <IconCurrencyDollar width={24} />
        </Fab>
      }
      footer={
        <Chart options={optionsRadialChart} series={seriesRadialChart} type="radialBar" height={200} width={"100%"} />
      }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          70
        </Typography>
        <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
            <IconArrowDownRight width={20} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            +10%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            compared to last month
          </Typography>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default DoctorsVisitors;
