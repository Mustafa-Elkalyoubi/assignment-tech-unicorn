import { Box, Button, Typography } from "@mui/material";

function Main(props: {
  children: React.ReactNode;
  title: string;
  caption: string;
  moreButton?: boolean;
}) {
  var { children, title, caption, moreButton } = props;

  if (!moreButton) moreButton = false;

  return (
    <main>
      <Box
        sx={{
          width: 1,
          height: "70vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 2rem 0 2rem",
          marginTop: "2rem",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            padding: "2rem",
          }}>
          {children}
          <Typography variant="caption">{caption}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "2rem",
            height: 1,
          }}
          gap={3}>
          <Typography variant="h3" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam impedit illum
            vel dolores reiciendis laudantium pariatur repudiandae tempora?
          </Typography>
          {moreButton && (
            <Button href="/shop" variant="contained" sx={{ padding: "1rem" }}>
              Find Out More
            </Button>
          )}
        </Box>
      </Box>
    </main>
  );
}

export default Main;
