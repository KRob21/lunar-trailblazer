{
  self,
  mkYarnPackage,
  lib,
  pkgs ? import <nixpkgs> {}
}: let
  pname = "lunar-trailblazer";
  version = "0.0.01-${lib.flox-floxpkgs.getRev self}";
  src = self;
in
  mkYarnPackage {{
  gnumake,
  mkShell,
  stdenv,
  zlib,
  nodePackages,
  python39,
  git,
  postgresql,
  nginx,
  docker,
  jest,
  eslint,
  prettier,
  sass,
  redis,
}:

mkShell {
  # Compilers and libraries go here
  buildInputs = [
    stdenv.cc
    zlib
    nodePackages.node
    python39
    git
    postgresql
    nginx
    docker
    jest
    eslint
    prettier
    sass
    redis
  ];

  # Add extra tools here
  packages = [
    gnumake
  ];

  # Any variable set in this block that isn't a reserved word will be set as an
  # environment variable in the environment.
  WELCOME_MESSAGE = "Run make to build this project";

  # A shell hook is a script to run when entering an environment.
  # It can be used to perform any custom activation steps needed for your
  # project.
  shellHook = ''
    make --version
    echo
    echo "$WELCOME_MESSAGE"
  '';
}

    inherit pname version src;
    packageJSON = src + "/package.json";
    yarnLock = src + "/yarn.lock";

    buildPhase = ''
      # example yarn --offline build
    '';

    installPhase = ''
      # example cp -R deps/${pname}/dist $out
    '';

    # example distPhase = "true";
    meta.description = "an example flox package";
  }
