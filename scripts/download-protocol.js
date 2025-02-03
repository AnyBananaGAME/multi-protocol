import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VERSIONS = {
    "0.6.0": "1.21.40",
    "0.7.1": "1.21.50",
    "0.7.2-beta-20250201215425": "1.21.60"
}

async function updateProtocol() {
    try {
        const tempDir = path.join(__dirname, '../temp');
        if (fs.existsSync(tempDir)) {
            fs.rmSync(tempDir, { recursive: true, force: true });
        }
        fs.mkdirSync(tempDir);

        try {
            for (const [protocolVersion, mappedVersion] of Object.entries(VERSIONS)) {
                const versionsDir = path.join(__dirname, '../src/versions', mappedVersion);
                
                if (fs.existsSync(versionsDir)) {
                    console.log(`Version ${mappedVersion} already exists, skipping...`);
                    continue;
                }

                console.log(`Installing protocol version ${protocolVersion} (mapped to ${mappedVersion})...`);
                
                fs.mkdirSync(versionsDir, { recursive: true });

                console.log('Downloading package...');
                process.chdir(tempDir);
                execSync(`npm pack @serenityjs/protocol@${protocolVersion}`, { stdio: 'inherit' });

                const packageFile = fs.readdirSync(tempDir).find(file => file.startsWith('serenityjs-protocol-'));
                if (!packageFile) {
                    throw new Error('Package file not found after download');
                }

                console.log('Extracting package...');
                execSync(`tar -xf ${packageFile}`, { stdio: 'inherit' });

                console.log('Copying type definitions...');
                const distDir = path.join(tempDir, 'package', 'dist');
                if (!fs.existsSync(distDir)) {
                    throw new Error('dist directory not found in package');
                }

                const files = fs.readdirSync(distDir);
                let foundFiles = false;
                
                for (const file of files) {
                    if (file.endsWith('.d.ts') || file.endsWith('.d.mts') || file.endsWith('.js') || file.endsWith('.mjs')) {
                        const newFileName = file.replace('.mts', '.ts').replace('.mjs', '.js');
                        fs.copyFileSync(
                            path.join(distDir, file),
                            path.join(versionsDir, newFileName)
                        );
                        console.log(`Copied ${file} as ${newFileName}`);
                        foundFiles = true;
                    }
                }

                if (!foundFiles) {
                    throw new Error('No type definition files found in package');
                }

                const savedFiles = fs.readdirSync(versionsDir);
                console.log(`Successfully downloaded protocol files to version ${mappedVersion}`);
                console.log(`Files saved in: ${versionsDir}`);
                console.log('Saved files:', savedFiles);

                for (const file of fs.readdirSync(tempDir)) {
                    const filePath = path.join(tempDir, file);
                    fs.rmSync(filePath, { recursive: true, force: true });
                }
            }
        } finally {
            process.chdir(path.join(__dirname, '..'));
            if (fs.existsSync(tempDir)) {
                fs.rmSync(tempDir, { recursive: true, force: true });
            }
        }
    } catch (error) {
        console.error('Error updating protocol:', error);
        process.exit(1);
    }
}

updateProtocol(); 