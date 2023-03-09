$time = Get-Date
rm -r dist/*
tsc
cp src/* -d dist -r -EA Ignore
rm -r dist/public/**/*.ts
$elapsed = [math]::round(($(Get-Date) - $time).TotalSeconds, 3)
& echo "Compiled successfully. ($elapsed seconds)"