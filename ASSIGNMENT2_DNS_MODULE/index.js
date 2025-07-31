const dns = require('dns').promises; 
const dnsCb = require('dns');        

const domain = 'google.com';
const ipAddress = '93.184.216.34'; 

async function main() {
  console.log(`\nDomain: ${domain} \n`);

  dnsCb.lookup(domain, (err, address, family) => {
    if (err) console.error('lookup error:', err);
    else console.log(`[lookup] IP address: ${address}, Family: IPv${family}`);
  });

  
  dnsCb.lookup(domain, { all: true }, (err, addresses) => {
    if (err) console.error('lookup(all) error:', err);
    else console.log(`[lookup(all)] Addresses:`, addresses);
  });

  const aRecords = await dns.resolve4(domain);
  console.log(`[resolve4] A records:`, aRecords);
  
  try {
    const aaaaRecords = await dns.resolve6(domain);
    console.log(`[resolve6] AAAA records:`, aaaaRecords);
  } catch (e) {
    console.warn('[resolve6] No AAAA records found.');
  }

  
  try {
    const cname = await dns.resolveCname(domain);
    console.log(`[resolveCname] CNAME:`, cname);
  } catch (e) {
    console.warn('[resolveCname] No CNAME records found.');
  }

 
  const mxRecords = await dns.resolveMx(domain);
  console.log(`[resolveMx] MX records:`, mxRecords);

  
  const nsRecords = await dns.resolveNs(domain);
  console.log(`[resolveNs] NS records:`, nsRecords);

  
  try {
    const srvRecords = await dns.resolveSrv(domain);
    console.log(`[resolveSrv] SRV records:`, srvRecords);
  } catch (e) {
    console.warn('[resolveSrv] No SRV records found.');
  }

 
  const soaRecord = await dns.resolveSoa(domain);
  console.log(`[resolveSoa] SOA record:`, soaRecord);

  
  dnsCb.reverse(ipAddress, (err, hostnames) => {
    if (err) console.error('[reverse] error:', err);
    else console.log(`[reverse] PTR record(s):`, hostnames);
  });
  try {
    const naptrRecords = await dns.resolveNaptr(domain);
    console.log(`[resolveNaptr] NAPTR records:`, naptrRecords);
  } catch (e) {
    console.warn('[resolveNaptr] No NAPTR records found.');
  }

  const servers = dnsCb.getServers();
  console.log(`[getServers] DNS servers:`, servers);

  dnsCb.setServers(['8.8.8.8', '1.1.1.1']);
  console.log(`[setServers] DNS servers updated to:`, dnsCb.getServers());
}

main().catch(console.error);
