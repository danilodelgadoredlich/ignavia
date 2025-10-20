{ pkgs  }: {
  # What packages to install
  packages = [
    pkgs.nodejs_20 
    pkgs.vite
  ];
  # Enable and configure a web preview
  idx.previews = [
    {
      # The command to start your dev server
      command = "npm install && npm run dev";
      # A label for the preview tab
      label = "Web";
      # The manager for the web preview, that will auto-detect the port
      manager = "web";
    }
  ];
}
