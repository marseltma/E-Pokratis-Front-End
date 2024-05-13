import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';

const products = [
    {
        id: "1",
        name: "Δρ. Αθανάσιος Παπαδόπουλος",
        post: "Παθολόγος",
        pname: "Στηθοσκόπιο",
        priority: "Χαμηλή",
        pbg: "primary.main",
        budget: "3.9",
    },
    {
        id: "2",
        name: "Δρ. Αντώνης Καραμπάσης",
        post: "Παιδίατρος",
        pname: "Ιατρικές Στολές",
        priority: "Μεσαία",
        pbg: "secondary.main",
        budget: "24.5",
    },
    {
        id: "3",
        name: "Δρ. Χρήστος Γεωργίου",
        post: "Καρδιολόγος",
        pname: "Παλμογράφος",
        priority: "Υψηλή",
        pbg: "error.main",
        budget: "12.8",
    },
    {
        id: "4",
        name: "Δρ. Μαρία Παπαδοπούλου",
        post: "Δερματολόγος",
        pname: "Δερματοσκόπιο",
        priority: "Κρίσιμη",
        pbg: "success.main",
        budget: "2.4",
    },
];


const ProductPerformance = () => {
    return (

        <DashboardCard title="Απόδοση Προϊόντων">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Ανατέθηκε σε
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Όνομα
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Προτεραιότητα
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Προϋπολογισμός
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.pname}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.budget}€</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
